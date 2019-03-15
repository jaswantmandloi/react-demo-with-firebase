import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./SignInConnect').then(
      (module) => {
        return module.default
      }
    )
)
