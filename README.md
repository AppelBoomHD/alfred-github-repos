# GitHub Repo project manager workflow for Alfred

> This fork of [alfred-github-repos](https://github.com/edgarjs/alfred-github-repos) enables you to automatically search and clone any GitHub repository via the GitHub Search API and open the project with Visual Studio Code. If you already have a local version of the selected GitHub repository, that directory will be opened.

## Requirements

- [Visual Studio Code](https://code.visualstudio.com) (including the "[code](https://code.visualstudio.com/docs/setup/mac)" shell command)
- [Node.js](https://nodejs.org)
- [git](https://git-scm.com)
- A GitHub Api token (how to obtain: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#about-personal-access-tokens)

## Installation

### Manual

1. Download the [workflow file](https://github.com/AppelBoomHD/alfred-vscode-github/releases/download/v1.0.1/alfred-vscode-github.alfredworkflow).
2. Double-click the downloaded file to install the workflow.
3. [Generate GitHub authentication token](https://github.com/settings/tokens/new?description=GitHub%20Repos%20Alfred%20workflow&scopes=repo)
4. Simply copy and paste this token into the user configuration.
5. Select your project directory in the user configuration

## Usage

Here's the list of available commands.

### Global Search: `gh <query>`

![gh hello-world](docs/gh-hello-world.png)

The example above will search for repositories with the string "hello-world" in their name. Internally this uses the [GitHub Search syntax][github-search], so you can use modifiers like:

![gh hello-world stars:>1000](docs/gh-hello-world-stars-1000.png)

This will search only in repositories that have more than 1000 stars.

> Please note that this command only searches in the repository name. This means that your query will be appended with the `in:name` modifier. So when you type in `hello-world`, the final search query sent will be: "hello-world in:name".

### Search your repositories: `repo [query]`

This command works the same as the previous one (`gh <query>`) but it limits the search to your own repositories.

> This includes repositories from your organizations as well.

### Search Pull Requests: `pr [query]`

This command searches within the Pull Requests that you're involved in.

If you want to limit the search to be under your organisations, please remove `PR_ALL_INVOLVE_ME` environment variable

### Open notifications: `gh-notifications`

This command just opens your [GitHub notification][notifications-page] page.

## Config Cache TTL

You can customise the TTL for the internal caches of Repos/Organisations/PullRequests in the user configuration.

## Configuring host for Enterprise

If you're using an Enterprise account, you can configure a custom api host in the user configuration.

---

## Contributing

You can submit your bug reports or feature requests at:
https://github.com/AppelBoomHD/alfred-github-projects/issues

If you want to submit a Pull Request, please follow these simple guides:

1. Add a detailed description of what you're changing and why.
2. Add necessary unit tests that cover your changes.
3. Don't increase the version of the workflow in your changes.

Here are some ideas for Pull Requests:

- [ ] Make search faster
- [ ] Search commits in a repository
- [ ] Search projects in an organization
- [ ] Improve icon graphics

## License

This project is published under the [MIT License](LICENSE.md).

[alfred-app]: https://www.alfredapp.com/
[github-search]: https://docs.github.com/en/free-pro-team@latest/github/searching-for-information-on-github/searching-on-github
[download-releases]: https://github.com/AppelBoomHD/alfred-github-projects/releases
[personal-access-token]: https://github.com/settings/tokens/new?description=GitHub%20Repos%20Alfred%20workflow&scopes=repo
[pulls-page]: https://github.com/pulls
[notifications-page]: https://github.com/notifications
[alfred-env-vars]: https://www.alfredapp.com/help/workflows/script-environment-variables/
