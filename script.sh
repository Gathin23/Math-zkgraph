# Test script for zkGraph

# Update `zkgraph.config.ts` with your own parameters first!
# Then run `sh test.sh`

npm run compile &&
npm run exec -- x &&
npm run prove -- --inputgen x y &&
npm run prove -- --test x y