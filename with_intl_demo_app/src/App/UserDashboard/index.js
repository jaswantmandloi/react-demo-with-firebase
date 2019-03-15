import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./UserDashboardConnect').then(
      (module) => {
        return module.default
      }
    )
)
