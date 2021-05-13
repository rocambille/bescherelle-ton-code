# REACT-STARTER-WCS

bootstrapper CLI for React App with basic conf for Caprover deployment.

It uses [ViteJS](https://vitejs.dev/) ⚡️

## Getting started :pushpin:

You can install it globally OR use npx instead

```bash
npx react-starter-wcs my-fresh-app

cd my-fresh-app

npm run dev

```

## Extra dependencies :pushpin:

You can add some extra dependencies during the install prompt.

Currently, none of them add the extra template files.

## Caprover :pushpin:

You can add pre-made config files if you use Caprover as your deployment solution.
Those are a Nginx config file, a Dockerfile and a `captain-definition` (needed for every Caprover app).

For CI/CD with Github Actions, see [below](#build-and-push-to-production-branch).

## GitHub Actions :pushpin:

<span style="color:red">_THESE ARE TEMPORARLY DISABLED !_</span>

Those create files for automate different actions, [give an eye here](https://github.com/features/actions).

### ESLint on PR :pencil2:

Running ESLint on Pull Request on `master` and `dev`.
Customize it in the `.github/workflows/eslint.yml` file.

### Build and push to production branch :pencil2:

Building the app and push it to a `production` branch once code is merged on `master`
Customize it in the `.github/workflows/builddeploy.yml` file.

:exclamation: :exclamation: If you choose this action **alongside** Caprover config files, please replace the default Dockerfile with the following one :exclamation: :exclamation:

```Dockerfile
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**BUT** actually, it doesn't create the Caprover config files on that branch, you have to do it on your own, following this :

```bash
# Create your GitHub repo and link it...
git push -u origin master

# Wait for the action to perform

git fetch --all

git checkout production

# copy/paste Dockerfile, captain-definition and default.conf from master branch

git add Dockerfile captain-definition default.conf
git commit -m "youhou, basic config added ! :fire:"
git push -u origin production
```

Then setup your Caprover app
![](https://i.imgur.com/v7zrDoK.png)
