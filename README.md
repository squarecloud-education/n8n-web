# 🔗 Square Cloud N8N
## Host N8N Workflow Automation on Square Cloud ☁️

> 🌐 Easily host your own N8N automation platform on Square Cloud and create powerful workflows from anywhere, right from your browser.

---

## 🚀 How to host this project on Square Cloud

New to Square Cloud? Follow these steps in order. You will create an account, choose a plan and upload a ready-made zip: no coding needed.

### 1️⃣ Create your Square Cloud account

Sign up on the [Square Cloud signup page](https://squarecloud.app/en/signup) with your email.

### 2️⃣ Choose a plan

Hosting on Square Cloud requires an active plan, and the upload in step 4 asks for one, so choose it now.

N8N needs **3 GB of RAM**: choose the **[Standard plan](https://squarecloud.app/en/pricing)**, which has 4 GB of RAM and 4 vCPU. Compare every plan and its price on the [pricing page](https://squarecloud.app/en/pricing).

### 3️⃣ Download the project

Download **`project.zip`** from the [latest release](https://github.com/squarecloud-education/n8n-web/releases/latest). This is the file you upload in the next step: you don't need to extract it.

### 4️⃣ Upload it to Square Cloud

1. Open the [Square Cloud upload page](https://squarecloud.app/en/dashboard/new).
2. Select the **zip** option and send the `project.zip` you downloaded.
3. Select **Web Publication** and choose a subdomain, for example `my-n8n`. Your N8N will be at `https://my-n8n.squareweb.app`.
4. Open **Advanced configuration** and add these environment variables, replacing `my-n8n` with your subdomain:
   - `N8N_HOST` = `my-n8n.squareweb.app`
   - `N8N_WEBHOOK_URL` = `https://my-n8n.squareweb.app/`
5. Click **Deploy** and wait about 2 minutes while N8N installs.

![Uploading a project to Square Cloud](https://cdn.squarecloud.app/docs/articles/dashboard/uploading.gif)

### 5️⃣ Create your N8N account

Open `https://my-n8n.squareweb.app` and create the owner account. The first person to open the page becomes the owner, so do it before sharing the URL with anyone.

📖 Need more details? Read the [full N8N guide](https://docs.squarecloud.app/en/tutorials/how-to-deploy-n8n) in the Square Cloud documentation.

---

## 🔄 Updating N8N

The N8N version is pinned in `package.json` (currently `2.41.6`), so a new major version never breaks your instance on a reinstall. To update, read the [N8N release notes](https://docs.n8n.io/changelog/release-notes), change the version in `package.json` and upload the project again.

---

## 📚 About the project

The goal of this project is to let you host an N8N instance on Square Cloud, so you can create and manage automated workflows from anywhere, directly from your browser.

---

🙋‍♂️ **Questions or suggestions?** Contact [Square Cloud Support](https://squarecloud.app/sac) or open an issue in this repository!

---

## 🙏 Credits

Maintained by [@JoaoOtavioS](https://github.com/JoaoOtavioS) on GitHub.
