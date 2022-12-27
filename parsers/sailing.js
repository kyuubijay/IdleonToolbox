import { kFormatter, lavaLog, tryToParse } from "../utility/helpers";
import { artifacts, captainsBonuses } from "../data/website-data";
import { getHighestLevelCharacter } from "./misc";
import { mainStatMap } from "./talents";

export const getSailing = (idleonData, charactersData, account) => {
  const sailingRaw = tryToParse(idleonData?.Sailing) || idleonData?.Sailing;
  const captainsRaw = tryToParse(idleonData?.Captains) || idleonData?.Captains
  const boatsRaw = tryToParse(idleonData?.Boats) || idleonData?.Boats
  return parseSailing(sailingRaw, captainsRaw, boatsRaw, charactersData, account);
}

const parseSailing = (sailingRaw, captainsRaw, boatsRaw, charactersData, account) => {
  const acquiredArtifacts = sailingRaw?.[3];
  const lootPile = sailingRaw?.[1];
  const artifactsList = artifacts?.map((artifact, index) => getArtifact(artifact, acquiredArtifacts?.[index], lootPile, index, charactersData, account))
  const maxChests = Math.min(Math.round(5 + (account?.gemShopPurchases?.find((value, index) => index === 129) ?? 0)), 19);
  return {
    maxChests,
    artifacts: artifactsList,
    lootPile: getLootPile(lootPile),
    ...getCaptainsAndBoats(sailingRaw, captainsRaw, boatsRaw)
  };
}

export const isArtifactAcquired = (artifacts, artifactName) => {
  return artifacts?.find(({ name, acquired }) => name === artifactName && acquired);
}

const getCaptainsAndBoats = (sailingRaw, captainsRaw, boatsRaw) => {
  const captainsUnlocked = sailingRaw?.[2]?.[0] || 0;
  const boatsUnlocked = sailingRaw?.[2]?.[1] || 0;
  const captains = captainsRaw?.slice(0, captainsUnlocked + 1).map(([_, bonusIndex]) => ({
    bonus: captainsBonuses?.[bonusIndex],
  }));
  const boats = boatsRaw?.slice(0, boatsUnlocked + 1);
  return {
    captains,
    boats
  }
}

const getLootPile = (lootPile) => {
  return lootPile?.map((item, index) => ({
    amount: item > 0 ? item : 0,
    rawName: `SailT${index}`
  }))
}

const getArtifact = (artifact, acquired, lootPile, index, charactersData, account) => {
  let additionalData, bonus = artifact?.baseBonus, baseBonus = artifact?.baseBonus, ancientForm = acquired === 2;
  let fixedDescription = artifact?.description;
  if (artifact?.name === 'Maneki_Kat' || artifact?.name === 'Ashen_Urn') {
    const highestLevel = getHighestLevelCharacter(charactersData)
    additionalData = `Highest level: ${highestLevel}`;
    bonus = highestLevel * artifact?.baseBonus;
    if (artifact?.name === 'Ashen_Urn') {
      bonus = highestLevel > artifact?.multiplier ? artifact?.multiplier * artifact?.baseBonus : highestLevel * artifact?.baseBonus;
      fixedDescription = `${fixedDescription} Total Bonus: ${ancientForm ? bonus * 2 : bonus}`;
    }
  } else if (artifact?.name === 'Ruble_Cuble' || artifact?.name === '10_AD_Tablet' || artifact?.name === 'Jade_Rock' || artifact?.name === 'Gummy_Orb') {
    const lootedItems = account?.looty?.rawLootedItems;
    const isAdTablet = artifact?.name === '10_AD_Tablet';
    additionalData = `Looted items: ${lootedItems}`;
    const math = (lootedItems - 500) / 10;
    bonus = isAdTablet ? artifact?.baseBonus * math : math;
  } else if (artifact?.name === 'Fauxory_Tusk' || artifact?.name === 'Genie_Lamp') {
    const sailingLevel = charactersData?.[1]?.skillsInfo?.sailing?.level || 0;
    const isGenie = artifact?.name === 'Genie_Lamp';
    bonus = isGenie ? sailingLevel * artifact?.baseBonus : sailingLevel;
    additionalData = `Sailing level: ${sailingLevel}`;
  } else if (artifact?.name === 'Weatherbook') {
    const gamingLevel = charactersData?.[1]?.skillsInfo?.gaming?.level || 0;
    additionalData = `Gaming level: ${gamingLevel}`;
    bonus = gamingLevel * artifact?.baseBonus;
  } else if (artifact?.name === 'Triagulon') {
    const ownedTurkey = account?.cooking?.meals?.[0]?.amount;
    bonus = (artifact?.baseBonus * lavaLog(ownedTurkey));
  } else if (artifact?.name === 'Opera_Mask') {
    const sailingGold = lootPile?.[0];
    bonus = (artifact?.baseBonus * lavaLog(sailingGold));
  } else if (artifact?.name === 'Gold_Relic') {
    const daysSinceLastSample = account?.accountOptions?.[125];
    additionalData = `Days passed: ${daysSinceLastSample}`;
  } else if (artifact?.name === 'Crystal_Steak') {
    const mainStats = charactersData?.map(({ name, class: className, stats }) => {
      const mainStat = mainStatMap?.[className];
      return { name, stat: stats?.[mainStat] };
    })
    fixedDescription = fixedDescription.replace('_Total_Bonus:_+}%_dmg', '')
    additionalData = mainStats.map(({ name, stat }) => ({
      name,
      bonus: (ancientForm ? bonus * 2 : bonus) * Math.floor(stat / 100)
    }));
  } else if (artifact?.name === 'Socrates') {
    const mainStats = charactersData?.map(({ name, stats }) => {
      return { name, strength: stats.strength, agility: stats.agility, wisdom: stats.wisdom, luck: stats.luck };
    })
    additionalData = mainStats.map(({ name, strength, agility, wisdom, luck }) => {
      const multiplier = 1 + (ancientForm ? artifact?.baseBonus * 2 : artifact?.baseBonus) / 100;
      return {
        name,
        strength: Math.floor(multiplier * strength),
        agility: Math.floor(multiplier * agility),
        wisdom: Math.floor(multiplier * wisdom),
        luck: Math.floor(multiplier * luck),
      }
    });
  }

  if (ancientForm && artifact?.ancientFormDescription === "The_artifact's_main_bonus_is_doubled!") {
    bonus *= 2;
    baseBonus *= 2;
  }

  fixedDescription = fixedDescription.replace(/{/, baseBonus).replace(/}/, kFormatter(bonus, 2)).replace(/@/, '');
  return {
    ...artifact,
    description: fixedDescription,
    additionalData,
    bonus,
    acquired,
    rawName: `Arti${index}`
  }
}