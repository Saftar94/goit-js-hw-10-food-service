# parcel-plugin-handlebars-precompile

Precompile handlebars templates into typescript allowing them to be imported as a regular typescript source.
It is up to you how and when the template will be rendered.

# Install

```bash
npm install --save-dev parcel-plugin-handlebars-precompile-ts
```

# Usage

Import your handlebars template:

```typescript
// index.ts
import templateFunction from "./template.hbs";
document.body.innerHTML = templateFunction();
```

Import `index.ts` from your `index.html` file:

```html
<!DOCTYPE html>
<html>
  <!-- index.html -->
  ...
  <body>
    <script src="./index.ts"></script>
  </body>
  ...
</html>
```

Run the parcel bundler:

```bash
parcel build index.html
```

# Credits

- [Handlebars](https://handlebarsjs.com/) - A templates on steroids.
- [Parcel](https://parceljs.org/) - Zero configuration bundler.
