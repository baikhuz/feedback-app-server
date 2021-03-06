const keys = require('../../config/keys')

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>
            Please help us improve!
          </h3>
          <p>
            Tell us about your experience.
          </p>
          <p>
            ${survey.body}
          </p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `
}
