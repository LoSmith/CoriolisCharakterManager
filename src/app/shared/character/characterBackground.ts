import { StarSystem } from '@app/shared/starSystem/system';

export enum CharacterUpbringing {
  Plebeian,
  Stationary,
  Privileged
}

export enum CharacterOrigin {
  Firstcome,
  Zenithian
}

export enum CharacterConcept {
  Artist,
  Courtesan,
  Musician,
  Poet,
  DataSpider,
  Analyst,
  Correspondent,
  DataDjinn,
  Fugitive,
  Criminal,
  Mystic,
  Revolutionary,
  Negotiator,
  Agitator,
  Diplomat,
  Peddler,
  Operative,
  Assassin,
  Guardsman,
  Spy,
  Pilot,
  Driver,
  FighterPilot,
  FreighterPilot,
  Trailblazer,
  Colonist,
  Prospector,
  Scout,
  Preacher,
  Ascetic,
  Missionary,
  Prophet,
  Scientist,
  Archaeologist,
  Medicurg,
  Technician,
  ShipWorker,
  Deckhand,
  DockWorker,
  Engineer,
  Solider,
  Legionnaire,
  Mercenary,
  Officer
}

export enum CharacterGroupConcept {
  Mercenarys,
  Explorers,
  Agents,
  Pilgrims
}

export enum CharacterIcon {
  TheLadyOfTears,
  TheDancer,
  TheGambler,
  TheMerchant,
  TheDeckhand,
  TheTraveler,
  TheMessenger,
  TheJudge,
  TheFaceless
}

export interface CharacterExperience {
  total?: number;
  spend?: number;
  free?: number;
}

export interface CharacterBackground {
  origin?: CharacterOrigin;
  homeSystem?: StarSystem;
  upbringing?: CharacterUpbringing;
  concept?: CharacterConcept;
  groupConcept?: CharacterGroupConcept;
  personalProblem?: string;
  icon?: CharacterIcon;
  xp?: CharacterExperience;
}
