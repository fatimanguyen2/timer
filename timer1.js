const arg = process.argv.splice(2);
if (!arg.length) {
  return;
}

arg.forEach(delay => {
  if (delay < 0) {
    return;
  }
  setTimeout(() => process.stdout.write('\x07'), delay * 1000);
});
