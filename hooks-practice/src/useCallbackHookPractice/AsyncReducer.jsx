import React from "react";

function AsyncReducer(state, action) {
  switch (action.type) {
    case "pending": {
      // 🐨 replace "pokemon" with "data"
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      // 🐨 replace "pokemon" with "data" (in the action too!)
      return { status: "resolved", data: action.promise, error: null };
    }
    case "rejected": {
      // 🐨 replace "pokemon" with "data"
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default AsyncReducer;
