tsconfig.json: configuration file for Typescript. It defines what should be type checked, ignored and which rule to follow
postcss.config.mjs: process css with different plugins
package-lock.json: a file that locks the version of dependencies and their exact subdependency that ensures everyone working on the projects uses the same exact version.
package.json: contain all dependecies and scripts
boilerplate code: văn mẫu code
layout.tsx: main entry point for application. Anything do that will be applied all pages and routers
serverside pre - rendering: 
    - server component -> reder only server side 
    - Client component => pre-render server side to create a static shell and then hydrated on the client side. => Client side does not indepentdent to browser is stil render on server.
    - The code or parts rely one the browser or require on interactivity are acted as placeholders during serverside pre-rendering. When they reach the client, the browser then renders the clients components then fill in the placeholders that left by the server.  