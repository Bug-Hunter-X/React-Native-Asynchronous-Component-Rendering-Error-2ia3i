import React, { useState, useEffect } from 'react';

const AsyncComponent = React.lazy(() => import('./AsyncComponent'));

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const { default: AsyncComponentLoaded } = await import('./AsyncComponent');
        setComponent(<AsyncComponentLoaded/>);
      } catch (error) {
        console.error('Error loading component:', error);
      }
      setIsLoading(false);
    };
    loadComponent();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return component;
};
export default MyComponent;