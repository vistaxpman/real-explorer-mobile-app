export const handleScreenNavigation = (navigation, route, param) => {
  navigation?.navigate(route, {
    param,
  });
};

export const handleNestedNavigation = (navigation, route, param, parent) => {
  navigation?.navigate(parent, {screen: route, param});
};

export const handleScreenReplace = (navigation, route, param) => {
  navigation?.replace(route, {
    param,
  });
};

export const handleScreenBack = (navigation) => {
  navigation?.goBack();
};

export const handleRemoveScreen = (navigation) => {
  navigation?.pop();
};
