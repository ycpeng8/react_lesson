export default function Header({ money, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={money.initialInvestment}
            onChange={(event) => handleChange(event, "initialInvestment")}
            required
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={money.annualInvestment}
            onChange={(event) => handleChange(event, "annualInvestment")}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={money.expectedReturn}
            onChange={(event) => handleChange(event, "expectedReturn")}
            required
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={money.duration}
            onChange={(event) => handleChange(event, "duration")}
            required
          />
        </p>
      </div>
    </section>
  );
}
