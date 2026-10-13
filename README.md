# Tushar Faroque - personal site

Source for [me.tfaroque.net](https://me.tfaroque.net), built with Jekyll and the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT license).

## Where things live

| To change | Edit |
| --- | --- |
| Site title, description, footer | `_config.yml` |
| Home page text and sidebar info | `_pages/about.md` |
| CV (work, education, skills, interests) | `assets/json/resume.json` |
| Project pages | `_projects/*.md` |
| Home page news | `_news/*.md` |
| Blog posts | `_posts/*.md` |
| Social links | `_data/socials.yml` |
| GitHub repositories page | `_data/repositories.yml` |

## Add your photo and resume

1. Put a photo in `assets/img/` and uncomment `image:` in `_pages/about.md`.
2. Put your resume PDF in `assets/pdf/` and uncomment `cv_pdf:` in `_pages/cv.md`.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```
