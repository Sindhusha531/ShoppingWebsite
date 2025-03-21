package com.sample.cart.Cartservice;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sample.cart.CartDto.ProductsDto;
import com.sample.cart.CartEntity.CartEntity;
import com.sample.cart.CartEntity.ProductsEntity;
import com.sample.cart.CartRepository.ICartRepo;
import com.sample.cart.CartRepository.IProdRepo;

@Service
public class Cartservice {
	@Autowired
	private IProdRepo repo;
	@Autowired
	private ICartRepo cartRepo;

	public ProductsDto save(ProductsDto prodDto) {
		ProductsEntity productEntity = new ProductsEntity();
		BeanUtils.copyProperties(prodDto, productEntity);
		productEntity = repo.save(productEntity);
		BeanUtils.copyProperties(productEntity, prodDto);
		return prodDto;

	}

	public ProductsDto saveToCart(ProductsDto prodDto) {

		CartEntity CartEntity = new CartEntity();
		BeanUtils.copyProperties(prodDto, CartEntity);
		CartEntity = cartRepo.save(CartEntity);
		BeanUtils.copyProperties(CartEntity, prodDto);
		return prodDto;

	}

	public void saveExcelData(MultipartFile file) throws IOException {
		List<ProductsEntity> users = parseExcelFile(file);
		repo.saveAll(users);

	}

	private List<ProductsEntity> parseExcelFile(MultipartFile file) throws IOException {
		List<ProductsEntity> products = new ArrayList<>();
		XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
		XSSFSheet sheet = workbook.getSheetAt(0);
		for (Row row : sheet) {
			if (row.getRowNum() == 0)
				continue;
			ProductsEntity entity = new ProductsEntity();
			entity.setProdName(row.getCell(0).getStringCellValue());
			entity.setDescription(row.getCell(1).getStringCellValue());
			entity.setPrice((int) row.getCell(2).getNumericCellValue());
			entity.setQuantity((int) row.getCell(3).getNumericCellValue());
			if (row.getCell(4) != null) {
	            String imageUrl = row.getCell(4).getStringCellValue();
	            entity.setImage(imageUrl); // Save the image URL to the entity
	        }
			entity.setBrand(row.getCell(5).getStringCellValue());
			entity.setColour(row.getCell(6).getStringCellValue());

			products.add(entity);
		}
		workbook.close();
		return products;
	}

	public ByteArrayInputStream exportDataToExcel() {
		try (Workbook workbook = new XSSFWorkbook()) {
			// Fetch data from the database
			List<ProductsEntity> users = repo.findAll();

			// Create an Excel sheet
			Sheet sheet = workbook.createSheet("Users");

			// Add a header row
			Row headerRow = sheet.createRow(0);
			String[] headers = { "prodId", "prodName", "description", "price", "quantity","brand","colour" };
			for (int i = 0; i < headers.length; i++) {
				Cell cell = headerRow.createCell(i);
				cell.setCellValue(headers[i]);
			}

			// Add data rows
			int rowIdx = 1;
			for (ProductsEntity user : users) {
				Row row = sheet.createRow(rowIdx++);
				row.createCell(0).setCellValue(user.getProdId());
				row.createCell(1).setCellValue(user.getProdName());
				row.createCell(2).setCellValue(user.getDescription());
				row.createCell(3).setCellValue(user.getPrice());
				row.createCell(4).setCellValue(user.getQuantity());
				row.createCell(5).setCellValue(user.getBrand());
				row.createCell(6).setCellValue(user.getColour());


			
			}
			// To save to specific folder
//	            String folderPath = "C:/exported-files"; // Change this to your desired folder
//	            File directory = new File(folderPath);
//	            if (!directory.exists()) {
//	                directory.mkdirs();           }
//	            String filePath = folderPath + "/users.xlsx";
//	            try (FileOutputStream fileOut = new FileOutputStream(filePath)) {
//	                workbook.write(fileOut);
//	            }
//	            return "Excel file saved to: " + filePath;

			// Write data to a ByteArrayOutputStream
			ByteArrayOutputStream out = new ByteArrayOutputStream();
			workbook.write(out);

			return new ByteArrayInputStream(out.toByteArray());
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	/*
	 * public InputStreamResource exportDataToCsv() { StringBuilder csvContent = new
	 * StringBuilder();
	 * 
	 * // Add CSV header csvContent.append("ID,Name,Email,Age\n");
	 * 
	 * // Fetch data and add rows List<User> users = userRepository.findAll(); for
	 * (User user : users) { csvContent.append(user.getId()).append(",")
	 * .append(user.getName()).append(",") .append(user.getEmail()).append(",")
	 * .append(user.getAge()).append("\n"); }
	 * 
	 * // Convert to InputStreamResource ByteArrayInputStream inputStream = new
	 * ByteArrayInputStream(csvContent.toString().getBytes(StandardCharsets.UTF_8));
	 * return new InputStreamResource(inputStream); } }
	 */
}
