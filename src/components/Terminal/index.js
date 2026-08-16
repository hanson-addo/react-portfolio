import './index.scss'

const lines = [
  { prompt: '~', text: 'whoami' },
  { prompt: '', text: 'hanson_addo — software engineer' },
  { prompt: '~', text: 'cat stack.txt' },
  { prompt: '', text: 'React · TypeScript · GraphQL · Node · Python' },
  { prompt: '~', text: 'status --current' },
  { prompt: '', text: 'open to opportunities' },
]

const Terminal = () => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div
            className="terminal-line"
            key={i}
            style={{ animationDelay: `${2.6 + i * 0.4}s` }}
          >
            {line.prompt && <span className="prompt">{line.prompt} $</span>}{' '}
            {line.text}
          </div>
        ))}
        <span className="cursor" />
      </div>
    </div>
  )
}

export default Terminal
