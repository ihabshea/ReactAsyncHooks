import React, { useEffect, useState, useRef, useCallback } from 'react';
export default function useStateAsync(initialState){
    const [state, setState] = useState(initialState);
    const resolverRef = useRef(null);
  
    useEffect(() => {
      if (resolverRef.current) {
        resolverRef.current(state);
        resolverRef.current = null;
      }

    }, [resolverRef.current, state]);
  
    const handleSetState = useCallback((stateAction) => {
      setState(stateAction);
      return new Promise(resolve => {
        resolverRef.current = resolve;
      });
    }, [setState])
  
    return [state, handleSetState];
  };