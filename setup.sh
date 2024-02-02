#!/bin/bash 

# Greet developer 
echo "Hello Oscar, Setting up your React Environment."

# Navigating to the development directory
# cd Njokaru

# Deactivating the Anaconda environment
conda deactivate && conda deactivate

# Activating the development environment
source myenv/bin/activate

# Confirming that everything is setup
echo "Everything should be ready to go."
