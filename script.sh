# Test script for zkGraph

# Update `zkgraph.config.ts` with your own parameters first!
# Then run `sh test.sh`

npm run compile &&
npm run exec -- 5095808 &&
npm run prove -- --inputgen 5095808 a444f5e90000000000000000000000000000000000000000000000000000000000000003 &&
npm run prove -- --test 5095808 a444f5e90000000000000000000000000000000000000000000000000000000000000003