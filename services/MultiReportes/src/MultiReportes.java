import com.aprendoz_test.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import java.net.URL;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.export.*;
import net.sf.jasperreports.engine.export.ooxml.*;
import net.sf.jasperreports.engine.util.*;
import net.sf.jasperreports.engine.fill.*;
import java.io.*;
import java.util.*;

import javax.print.attribute.*;
import javax.print.attribute.standard.*;
import javax.print.*;

public class MultiReportes extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
   
   public String getReport(Map parameters) throws Exception{

    try{
    Aprendoz_test service=(Aprendoz_test)RuntimeAccess.getInstance().getService(Aprendoz_test.class);
    service.begin();
    Session session=service.getDataServiceManager().getSession();
    
    String fileName=String.valueOf(parameters.get("file"));
    String typeDocument=String.valueOf(parameters.get("typeDoc"));
    String idasignatura=String.valueOf(parameters.get("ida"));
      System.out.println("Archivo: "+fileName);
      System.out.println("Tipo: "+typeDocument);
      System.out.println("id asignatura: "+idasignatura);

    URL fileUrl = this.getClass().getResource(fileName);
    System.out.println("la url: "+fileUrl);
    
    JasperReport report2 = (JasperReport) JRLoader.loadObject(fileUrl);
    JasperPrint jasperPrint =
    JasperFillManager.fillReport(report2,parameters,session.connection());

    String pathWR=RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("services/MultiReportes/src");
    System.out.println("path: "+pathWR);
  
    if(typeDocument.equals("PDF")){
      fileName=fileName+".pdf";
      System.out.println(fileName);
      JRPdfExporter exporter = new JRPdfExporter(); 
      exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      exporter.exportReport(); 
      }
    else if(typeDocument.equals("HTML")){
      fileName=fileName+".html";
      JRHtmlExporter exporter = new JRHtmlExporter(); 
      exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      exporter.exportReport(); 
    }
    else if (typeDocument.equals("DOCX")){
      fileName=fileName+".docx";
      System.out.println(fileName);
      JRDocxExporter exporter = new JRDocxExporter(); 
      exporter.setParameter(JRDocxExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRDocxExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);
      exporter.setParameter(JRDocxExporterParameter.FLEXIBLE_ROW_HEIGHT, Boolean.TRUE);
      exporter.exportReport(); 
    }  
    else if(typeDocument.equals("XLS")){
      fileName=fileName+".xls";
      JRXlsExporter exporter = new JRXlsExporter(); 
      exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      exporter.exportReport(); 
    }
    else if(typeDocument.equals("RTF")){
      fileName=fileName+".rtf";
      JRRtfExporter exporter = new JRRtfExporter(); 
      exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      exporter.exportReport(); 
    }
    else if(typeDocument.equals("TXT")){
      fileName=fileName+".txt";
      JRExporter exporter = new JRTextExporter();
      Integer pageHeight=new Integer(jasperPrint.getPageHeight()); 
      Integer pageWidth = new Integer(jasperPrint.getPageWidth());
      exporter.setParameter(JRTextExporterParameter.JASPER_PRINT, jasperPrint); 
      exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME, pathWR+"/"+fileName);  
      exporter.setParameter(JRTextExporterParameter.PAGE_WIDTH,pageWidth);
      exporter.setParameter(JRTextExporterParameter.PAGE_HEIGHT,pageHeight);
      exporter.setParameter(JRTextExporterParameter.CHARACTER_WIDTH,new Integer(11));
      exporter.setParameter(JRTextExporterParameter.CHARACTER_HEIGHT,new Integer(11));
      exporter.setParameter(
        JRTextExporterParameter.BETWEEN_PAGES_TEXT,
        new String("___________________________________________________________")
      );
     
      exporter.exportReport();
    }
    return "services/MultiReportes/src/"+fileName;
  
    }
    catch(Exception e){
      e.printStackTrace();
    return "";
    }
   
  }
   
}