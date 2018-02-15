export default () => (
  <div>
    <ul>
      <li>Someone Great</li>
      <li>Let It Go</li>
      <li>Royals</li>
      <li>Aint it so</li>
      <li>Get Lucky</li>
    </ul>

    <style jsx>{`
      li {
        border-bottom: 1px solid gray;
        list-style: none;
        padding: 1rem;
      }

      li:last-child {
        border: none;
      }
    `}</style>
  </div>
)
