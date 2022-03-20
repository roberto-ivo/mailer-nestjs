import { ApolloDriver } from '@nestjs/apollo';
import { GqlModuleOptions, Int } from '@nestjs/graphql';
import * as config from 'config';
import { join } from 'path';
// import { FarmSizeResolver } from 'src/enums/farmSize.enum';
// import { StatesResolver } from 'src/enums/states.enum';
// import { FarmCapitalResolver } from 'src/enums/farmCapital.enum';
// import { FarmTypesResolver } from 'src/enums/farmTypes.enum';

const configs = config.get('graphql');

export default {
  ...configs,
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  installSubscriptionHandlers: true,
  resolvers: {
    //Size: {acre: FarmSizeResolver, amount: Int},
    // FarmSize: FarmSizeResolver,
    // States: StatesResolver,
    // FarmCapital: FarmCapitalResolver,
    // FarmTypes: FarmTypesResolver,
  },
  context: ({ req, connection }) =>
    connection ? { req: connection.context } : { req },
} as GqlModuleOptions;
