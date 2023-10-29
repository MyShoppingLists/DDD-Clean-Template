import { Request, Response, NextFunction } from 'express';

export class LoggerMiddleware {
  public static logRequest(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.url}`);
    console.log('Request Headers:', req.headers);

    // Capture the start time of the request
    const startTime = new Date();

    // Intercept and log the response
    res.on('finish', () => {
      // Calculate the response time
      const endTime = new Date();
      const responseTime = endTime.getTime() - startTime.getTime();

      // Log the response status code and response time
      console.log(`Response Status: ${res.statusCode}`);
      console.log(`Response Time: ${responseTime}ms`);
    });

    next();
  }
}
