# ContextMenu #

The **ContextMenu** - Component is part of the **chayns-component** package. You can install the whole package with the following statement:

    npm install -S chayns-components@latest

The component shows a context menu with the chosen items. On the desktop, the menu renders on the chosen position while it is a dialog on mobile devices.

## Usage ##

First of all import the component to a component of your own project.

```jsx harmony
import { ContextMenu } from 'chayns-components';
```

You can use the contextMenu like in the [example](https://github.com/TobitSoftware/chayns-components/blob/master/examples/react-chayns-contextmenu/Example.jsx).


## Props ##

The component got the following properties:

| Property   | Description                                                                                        | Type   | Default | Required
|------------|-----------------------------------------------------------------------------------------------------|--------|-------|------|
| coordinates           | Coordinates of the place to which the ContextMenu is rendered. Example: {x: 100, y: 100}                                  | object    |       |  |
| onLayerClick | An Event which get triggered when the **ContextMenu** is shown and the User clicks on the Layer over the page. Returns an MouseEvent if it was closed on the desktop using a mouse. | func | ||
| position | The position of the ContextMenu (exported by ContextMenu.position). If not set, the ContextMenu will choose the position | number | null ||
| positionOnChildren | The position of the ContextMenu arrow on the children (exported by ContextMenu.positionOnChildren). | number | 1 (center) ||
| arrowDistance | The distance between the arrow and the end of the children (only if positionOnChildren is set to left or right). | number | 0 ||
| items | The Items which are displayed in the **ContextMenu** | array | |
| item.className | The className of an item of the **ContextMenu** | string | |
| item.onClick | The function, which gets triggered when the user clicks on a certain item in the **ContextMenu** | func | ||
| item.text | The text displayed in an item of the **ContextMenu** | string | |
| item.icon | The icon displayed in an item of the **ContextMenu** | object/string | |
| parent | DOM Node into which the **ContextMenu** will be rendered | node | tapp |
| children | React Node, that the tooltip should refer to. It will always be rendered to your page. | node | ts-ellipsis_v-icon
| childrenStyle | Style for the children node | object | 
| stopPropagation     | Stops the click propagation to parent elements                                                      | bool          | false         |       |
| minWidth              | minWidth of the contextMenu.            | number    | 100   |       |
| maxWidth              | maxWidth of the contextMenu.                    | number    | 250   |       |
| showTriggerBackground              | Adds a white background to the trigger (for usage on images or videos)                    | bool    | false   |       |
| removeParentSpace  | Removes space from the parent to the page borders from contextMenu position. It's only needed if the parent has space to the page borders and it's position is relative. | bool    | false   |       |

Also, you can call the methods show() and hide() on the reference of the contextMenu.

If you don't set coordinates or a children, the **ContextMenu** will render the `ts-ellipsis-v` icon as a trigger.
