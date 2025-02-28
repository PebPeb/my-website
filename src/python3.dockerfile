FROM python:3.10

# Set working directory
WORKDIR /app

# Install Pelican and dependencies
RUN pip install --no-cache-dir \
  pelican \
  markdown \ 
  typogrify

# Set Pelican as the default command
CMD ["bash"]
