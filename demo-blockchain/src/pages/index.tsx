import React, { useState } from "react";

const Block = ({ index, data, previousHash, hash, onDataChange }: any) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      width: "250px",
    }}
  >
    <h3 style={{ marginTop: 0 }}>Block {index}</h3>
    <div>
      <label>
        Data:
        <input
          type="text"
          value={data}
          onChange={(e) => onDataChange(index, e.target.value)}
          style={{ width: "100%", marginBottom: "8px" }}
        />
      </label>
    </div>
    <div>
      <strong>Previous Hash:</strong>
      <div style={{ fontSize: "12px", wordBreak: "break-all" }}>
        {previousHash}
      </div>
    </div>
    <div>
      <strong>Hash:</strong>
      <div style={{ fontSize: "12px", wordBreak: "break-all" }}>{hash}</div>
    </div>
  </div>
);

const BlockchainDemo = () => {
  const [blocks, setBlocks] = useState([
    { data: "Genesis Block", previousHash: "0", hash: "000" },
    { data: "Transaksi 1", previousHash: "000", hash: "111" },
    { data: "Transaksi 2", previousHash: "111", hash: "222" },
  ]);

  const addBlock = () => {
    const newBlock = {
      data: `Transaksi ${blocks.length}`,
      previousHash: blocks[blocks.length - 1].hash,
      hash: Math.random().toString(36).substring(7),
    };
    setBlocks([...blocks, newBlock]);
  };

  const updateBlockData = (index: any, newData: any) => {
    const updatedBlocks = blocks.map((block, i) => {
      if (i === index) {
        return {
          ...block,
          data: newData,
          hash: Math.random().toString(36).substring(7),
        };
      }
      if (i > index) {
        console.log(blocks[blocks.length - 1].hash, "previous hash");

        return {
          ...block,
          previousHash: blocks[blocks.length - 1].hash,
          hash: Math.random().toString(36).substring(7),
        };
      }
      return block;
    });
    setBlocks(updatedBlocks);
  };
  console.log(blocks, "block data");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "16px" }}>
      <h1>Demo Interaktif Blockchain</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {blocks.map((block, index) => (
          <Block
            key={index}
            index={index}
            {...block}
            onDataChange={updateBlockData}
          />
        ))}
      </div>
      <button
        onClick={addBlock}
        style={{
          marginTop: "16px",
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Tambah Block lagi test lagi ya
      </button>
    </div>
  );
};

export default BlockchainDemo;
