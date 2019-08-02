import express, { Request, Response } from 'express';
import next from 'next';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 * App.ts is the injection point for the application. 
 * 
 * The purpose of this custom injection point is to allow for variable routes, in the case of the 
 * elections with year. If you require any other routes that require variables, such as a custom 
 * blog site, then feel free to make another one. Otherwise, it should all just be covered under 
 * the * route.
 * 
 * Last Modified
 *      William Kwok
 *      June 6, 2019
 */
app.prepare()
    .then(() => {
        const server = express();

        server.get('/blog/:blogId', (req: Request, res: Response) => {
            return app.render(req, res, '/blog', { blogId: req.params.blogId || "" });
        })

        server.get('/projects/:projectName', (req: Request, res: Response) => {
            return app.render(req, res, '/projects', { projectName: req.params.projectName || "" });
        })

        server.get('*', (req: Request, res: Response) => {
            return handle(req, res)
        })

        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`)
        })
    });