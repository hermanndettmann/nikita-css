# Why Not?

## Why no extra prefix for Layout blocks? Maybe `l-` or `lb-`?

Visually it's not that easy to figure the difference between a lowercase l and a 1. But this is not the main reason.

Since those layout blocks are already prefixed with `b-page-` there is no reason to prefix them with an additional prefix.


## Why don't you remove the prefix from page, main, nav, header, aside, footer classes?

Because if we would use `.header` as class for the header, it would influence other `.header` elements of other blocks. For instance:

```
CSS

.page
.header
.main
	.b-article
		.header
		.content
.footer
```

If we set color for `.header` now, we would have to reset it on `.b-article .header`.

Don't even think about abusing `.header[role=banner]` as excuse! Count: 1 (increment if you tried!). ;)


## Why `extends` instead of `placeholders` for the placeholders/extends folder?

Because `mixins` contains all `@mixin` definitions in single files.
Usage: `@include mixin-name(param1, param2)`

Because `extends` contains all `%placeholder` definitions in single files.
Usage: `@extend %placeholder-name`
