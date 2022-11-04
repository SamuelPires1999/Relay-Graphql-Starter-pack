import { GraphQLError } from 'graphql';
import { Context, Request } from 'koa';
import { OptionsData } from 'koa-graphql';
import { schema } from '../schema/schema';
import { getContext } from './getContext';

export const graphqlSettingsPerReq = async (
  req: Request,
  ctx: any,
  koaContext: Context,
) => {

  return {
    graphiql: process.env.NODE_ENV !== 'production',
    schema,
    context: await getContext({
      req,
      koaContext,
    }),
    customFormatErrorFn: (error: GraphQLError) => {
      // eslint-disable-next-line
      console.log(error.message);
      // eslint-disable-next-line
      console.log(error.locations);
      // eslint-disable-next-line
      console.log(error.stack);

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack,
      };
    },
  } as OptionsData;
};