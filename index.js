const page = (
  <div>
    <nav>
      <img src="./react-logo.png" alt="react-logo" width="40px" />
    </nav>

    <h1>Fun facts about React.</h1>

    <ul>
      <li>Was first released in 2013.</li>
      <li>Was originally created by Jordan Walke</li>
      <li>He has over 100k stars on Github.</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps including mobile apps.</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById('root'));
