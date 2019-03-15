import asyncComponent from '../../Core/AsyncComponent';

export default asyncComponent(() =>
    import('./PostsConnect').then(
      (module) => {
        return module.default
      }
    )
)
