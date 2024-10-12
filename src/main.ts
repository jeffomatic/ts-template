// eslint-disable-next-line @typescript-eslint/require-await
async function main() {
  console.log("Hello, World!");
}

if (module === require.main) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
