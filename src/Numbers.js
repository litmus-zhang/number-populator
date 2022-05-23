export default function Numbers({text}) {
  return (
      <div className="Number">{text}
      
          <style jsx>{`
      .Number {
          font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        background-color: #000;
        padding: 2rem;
        margin: .5rem;
        border-radius: .5rem;
      }
      `}</style>
      </div>
  )
}
