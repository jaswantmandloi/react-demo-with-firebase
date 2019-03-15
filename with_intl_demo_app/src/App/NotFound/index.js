import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./NotFound').then(
      (module) => {
        return module.default
      }
    )
)
