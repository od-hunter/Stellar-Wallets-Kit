import { AlbedoModule } from './modules/albedo.module';
import { FreighterModule } from './modules/freighter.module';
import { LobstrModule } from './modules/lobstr.module';
import { RabetModule } from './modules/rabet.module';
import { xBullModule } from './modules/xbull.module';
import { HanaModule } from './modules/hana.module';
import { ModuleInterface } from './types';

export function allowAllModules(): ModuleInterface[] {
  return [
    new AlbedoModule(),
    new FreighterModule(),
    new RabetModule(),
    new xBullModule(),
    new LobstrModule(),
    new HanaModule(),
  ];
}
