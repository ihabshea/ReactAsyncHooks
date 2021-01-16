# React Async Hooks

This package is intended to offer asynchronous support for React hooks. For the current beta release, it only supports useState and useEffect, with support coming for other hooks in next releases.
# Install

    yarn add @ihabshea/asynchooks@0.0.1
 or   

    npm install @ihabshea/asynchooks@0.0.1

# Usage

    import {useEffectAsync, useStateAsync} from "@ihabshea/asynchooks"
    const [complicatedData, setComplicatedData] = useStateAsync([]);
    useEffectAsync(async()=>{
    //do something really cool/complicated
    //but don't forget to specify a dependency list like this:
    ,[]);
