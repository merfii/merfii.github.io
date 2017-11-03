
For example, suppose you’re creating a link in `page_a.md` (stored in `pages/folder1/folder2`) to `page_b.md` (stored in `pages/folder1`). Your path in the link would not be `../page_b.html`. Instead, it would be `/pages/folder1/page_b.md`.

If you’re unsure of the path, add `{{ page.path }}` to the page and it will display the path.



If you want to include a link to a post on your site, the `post_url` tag will generate the correct permalink URL for the post you specify.

```
{{ site.baseurl }}{% post_url 2010-07-21-name-of-post %}

```

If you organize your posts in subdirectories, you need to include subdirectory path to the post:

```
{{ site.baseurl }}{% post_url /subdir/2010-07-21-name-of-post %}

```

