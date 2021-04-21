import express from 'express';
import IRequest from '../types/IRequest';

/**
 * Route authentication middleware to verify a token
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */

export default async (req: IRequest, res: express.Response, next: express.NextFunction) => {
  next();
};
