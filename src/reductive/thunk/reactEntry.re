module ThunedStoreProvider = {
  let make = Reductive.Provider.createMake ThunkedStore.store;
};

ReactDOMRe.renderToElementWithId <ThunedStoreProvider component=DataRender.make /> "index";