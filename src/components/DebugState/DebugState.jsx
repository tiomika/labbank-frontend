function DebugState(props) {
  return (
    <code
      style={{
        backgroundColor: "#fcfcfc",
        padding: "1rem",
        borderRadius: "0.5rem",
        marginTop: "1rem",
        display: "block",
        width: "480px",
        boxShadow: "15px 20px 0.5rem rgba(0, 0, 0, 0.25)",
        position: "absolute",
        left: "1rem",
        bottom: "4rem",
        border: "3px solid #0f2b39",
      }}
    >
      Debug mode:
      <pre
        style={{
          color: "black",
          fontSize: "0.75rem",
          textAlign: "left",
          margin: 0,
          marginTop: "0.5rem",
          fontFamily: "monospace",
        }}
      >
        {JSON.stringify(props.state, null, 2)}
      </pre>
    </code>
  );
}

export default DebugState;
