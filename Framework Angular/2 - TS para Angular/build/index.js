"use strict";
//Decorators
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version });
    };
}
