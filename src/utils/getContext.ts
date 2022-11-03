import { Request, Context } from 'koa';

type ContextVars = {
  req?: Request;
  koaContext: Context;
};

export const getContext = async (ctx: ContextVars) => {

  return {
    req: ctx.req,
    koaContext: ctx.koaContext,
  }
};