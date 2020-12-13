export const handleScreenNavigation = (navigation, route, param) => {
  navigation?.navigate(route, {
    param,
  });
};

export const handleScreenBack = (navigation) => {
  navigation?.goBack();
};
