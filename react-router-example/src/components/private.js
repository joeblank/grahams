import React, { Component } from 'react';
import { Link } from 'react-router';

export default function() {
  return (
    <div className="">
      <p>Welcome to the private route.</p>
      <p>NOTE: Now that you are logged in, return to the home route and click on the 'Private Route' button, again.</p>
      <Link to="/"><button className="btn btn-success link">Return to home route.</button></Link>
    </div>
  )
}
