# Open short - Your Privacy-Focused URL Shortener

Opshort is a free and open-source URL shortener designed to prioritize simplicity, speed, and reliability. Our primary goal is to protect your privacy and provide a smooth user experience without intrusive ads. With Opshort, you can confidently track link clicks while knowing that your data is secure.

## Features

- **Privacy First**: We are committed to safeguarding your data and do not engage in selling it to third parties. The information we collect is solely for the purpose of tracking link clicks.

- **Ad-Free Experience**: Say goodbye to annoying ads that disrupt your browsing. Opshort ensures a clean and ad-free environment for all users.

- **Simplicity and Speed**: Our straightforward interface makes it easy to shorten URLs quickly and efficiently. Enjoy a seamless experience without unnecessary complexity.

- **Open Source**: Transparency is vital to us. Opshort is 100% open-source, allowing you to inspect our code and gain confidence in our commitment to your privacy.

## How to Use

1. **Shorten a URL**: Paste your long URL into the provided input field on the Opshort website and click the "Shorten" button. In an instant, you'll receive a shortened link that you can share with others.

2. **Track Link Clicks**: With Opshort, you can monitor how many people have clicked on your shortened link. Simply access your dashboard and view the click statistics.

## Installation

Opshort is a web-based application, so no installation is required. Visit our website at [www.opshort.com](https://www.opshort.com) and start shortening URLs right away.

## Self setup

If you want to create your open-short version you can just clone and create an .env file with

```
DATABASE_URL="db uri"
```

Run 
```
npx prisma db push
```

Notice if you will deploy to vercel remenber to build with `prisma generate`

```
prisma generate && <actual-build-command>
```


## Contribution

We welcome contributions from the community! If you would like to contribute to Opshort's development, please fork the repository and submit a pull request with your proposed changes.

## Feedback and Support

We appreciate your feedback and are here to assist with any issues you encounter. If you have any questions or need support, please reach out to us through [Discord server](https://discord.gg/skwJuprZAP).

## License

Opshort is released under the [MIT License](LICENSE), granting you the freedom to use, modify, and distribute the software.

---

Thank you for considering Opshort for your URL shortening needs. We hope you enjoy a secure and seamless link-sharing experience with us!