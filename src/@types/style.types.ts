//******* LeftNav.style ******//
export interface BurgerBtnProps {
  openBurger?: boolean;
}

export interface NavListItemElements {
  show?: boolean;
}

export interface NavItemArrowIcon {
  rotate?: boolean;
}

export interface NavListItem extends NavListItemElements {
  activeElement?: boolean;
  themeType?: string;
  pseudoClassActive?: boolean;
}

export interface ActiveBoolean {
  active?: boolean;
}

export interface InputCheckmark extends ActiveBoolean {
  hovered?: boolean;
}

//******* TopNav.style ******//
export interface IconContainer extends ActiveBoolean {
  shrink?: boolean;
}

//*** DisplayHelper.style ***//

export interface DisplayBoolean {
  shouldDisplay?: boolean;
}

export interface MoreOptionsContainer extends DisplayBoolean {
  _height: number;
}

export interface MoreOptionsItem extends DisplayBoolean {
  delay?: number;
}

export interface PriceFilterInput {
  redBorder: boolean;
}

//******* mainContent *******//
export interface Carousel {
  x?: number;
}

export interface BelowNavBtnContainer {
  quantity?: number;
}

//******** Products *********//

export interface BottomCounter {
  resetBottomRadius?: boolean;
}

export interface ChooserElement {
  choosenValue?: boolean;
}

/********* Modal ***********/

export interface ModalBottomBtn {
  rightIconDirection?: boolean;
}

/*********** Card **********/

export interface HideBorderBottom {
  hideBorderBottom?: boolean;
}
