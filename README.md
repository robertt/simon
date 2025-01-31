# Simon

An extremely simple page which will try to redirect the user to their corresponding app store (iOS -> App Store, Android -> Play Store) based on their User Agent.

## Usage

| Name          | Description                              | Example                   | Required? |
| ------------- | ---------------------------------------- | ------------------------- | --------- |
| ?playstore    | The Play Store package of the app        | com.innersloth.spacemafia | Yes       |
| ?appstorename | The App Store name of the app            | among-us                  | Yes       |
| ?appstoreid   | The App Store id of the app              | id1351168404              | Yes       |
| ?fallback     | The fallback url if no device is matched | https://yourwebsite.com   | No        |

For example, in Among Us's case, their URL would be `/?playstore=com.innersloth.spacemafia&appstorename=among-us&appstoreid=id1351168404`

If no fallback is provided, a page like this will be rendered:

<img src="https://i.imgur.com/xgl8xsp.png" />

## Deployment

In the future, I may deploy a public version. For now, a docker image is provided on the Docker Hub, `robertwestbury/simon`. It will defaut to port
`4000`, using the `PORT` environment variable as an override.

## Why is it called Simon?

<img src="https://i.imgur.com/Ud5WqYh.png" />
