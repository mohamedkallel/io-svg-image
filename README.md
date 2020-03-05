# io-svg-image

Insert in your html an svg image so the user can manipulate the svg style

# Install

npm install io-svg-image

# Usage

import SvgImageModule to your module

```typescript
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    SvgImageModule,
    ...
  ]
})
export class AppModule { }
```

then use it in your html
```html
...
<svg-image src="/assets/mysvg.svg"></svg-image>
...
```

# Input
[src] : it can contain the SVG file you want to load and it can contain also contain SVG source in XML format

# Example: change SVG fill color
In your html file add a class to your SVG image

```html
...
<svg-image src="/assets/mysvg.svg" class="mysvg"></svg-image>
...
```

then in your global CSS file you add that class with path selector to select the path under your svg file

```css
.mysvg path{
    fill: red !important
}
```


# Test
You can download this project and then you can run the demo project by running

ng serve demo

