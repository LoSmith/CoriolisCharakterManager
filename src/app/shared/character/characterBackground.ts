import { StarSystem } from '@app/shared/starSystem/system';

export enum CharacterUpbringing {
  Plebeian = 'Plebeian',
  Stationary = 'Stationary',
  Privileged = 'Privileged'
}

export enum CharacterOrigin {
  Firstcome = 'Firstcome',
  Zenithian = 'Zenithian'
}

export enum CharacterConcept {
  Artist = 'Artist',
  Courtesan = 'Courtesan',
  Musician = 'Musician',
  Poet = 'Poet',
  DataSpider = 'DataSpider',
  Analyst = 'Analyst',
  Correspondent = 'Correspondent',
  DataDjinn = 'DataDjinn',
  Fugitive = 'Fugitive',
  Criminal = 'Criminal',
  Mystic = 'Mystic',
  Revolutionary = 'Revolutionary',
  Negotiator = 'Negotiator',
  Agitator = 'Agitator',
  Diplomat = 'Diplomat',
  Peddler = 'Peddler',
  Operative = 'Operative',
  Assassin = 'Assassin',
  Guardsman = 'Guardsman',
  Spy = 'Spy',
  Pilot = 'Pilot',
  Driver = 'Driver',
  FighterPilot = 'FighterPilot',
  FreighterPilot = 'FreighterPilot',
  Trailblazer = 'Trailblazer',
  Colonist = 'Colonist',
  Prospector = 'Prospector',
  Scout = 'Scout',
  Preacher = 'Preacher',
  Ascetic = 'Ascetic',
  Missionary = 'Missionary',
  Prophet = 'Prophet',
  Scientist = 'Scientist',
  Archaeologist = 'Archaeologist',
  Medicurg = 'Medicurg',
  Technician = 'Technician',
  ShipWorker = 'ShipWorker',
  Deckhand = 'Deckhand',
  DockWorker = 'DockWorker',
  Engineer = 'Engineer',
  Solider = 'Solider',
  Legionnaire = 'Legionnaire',
  Mercenary = 'Mercenary',
  Officer = 'Officer'
}

export enum CharacterGroupConcept {
  Mercenarys = 'Mercenarys',
  Explorers = 'Explorers',
  Agents = 'Agents',
  Pilgrims = 'Pilgrims'
}

export enum CharacterIcon {
  TheLadyOfTears = 'The Lady Of Tears',
  TheDancer = 'TheDancer',
  TheGambler = 'TheGambler',
  TheMerchant = 'TheMerchant',
  TheDeckhand = 'TheDeckhand',
  TheTraveler = 'TheTraveler',
  TheMessenger = 'TheMessenger',
  TheJudge = 'TheJudge',
  TheFaceless = 'TheFaceless'
}

export interface CharacterExperience {
  spent?: number;
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
