import asyncComponent from '../../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./PostConnect').then(
      (module) => {
        return module.default
      }
    )
)
